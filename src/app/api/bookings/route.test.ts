import assert from "node:assert/strict";
import { afterEach, describe, it, mock } from "node:test";

describe("POST /api/bookings", () => {
  afterEach(() => {
    mock.restoreAll();
  });

  it("forwards a single create request to Booking Broom", async () => {
    process.env.BOOKING_BROOM_URL = "https://bookings.example.test";
    process.env.BOOKING_BROOM_API_KEY = "bb_test_key";
    process.env.BOOKING_BROOM_SITE_SLUG = "celebration";

    let upstreamCalls = 0;
    mock.method(globalThis, "fetch", async (input: RequestInfo | URL, init?: RequestInit) => {
      upstreamCalls += 1;
      assert.equal(String(input), "https://bookings.example.test/api/bookings");
      assert.equal(init?.method, "POST");
      const body = JSON.parse(String(init?.body));
      assert.equal(body.site_slug, "celebration");
      assert.equal(body.api_key, "bb_test_key");
      assert.equal(body.customer_name, "Demo Test User");
      return new Response(JSON.stringify({ id: "bk_1", message: "Booking created" }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    });

    const { POST } = await import("./route");
    const request = new Request("http://localhost/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_name: "Demo Test User",
        email: "demo-test@example.com",
        phone: "689-388-0000",
        service_type: "Standard Cleaning",
        notes: "AUTOMATION TEST - single booking - please ignore",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    assert.equal(response.status, 201);
    assert.equal(upstreamCalls, 1);
    assert.equal(data.ok, true);
    assert.equal(data.id, "bk_1");
  });
});
