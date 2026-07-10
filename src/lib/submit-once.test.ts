import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createSubmitOnce } from "./submit-once";

describe("createSubmitOnce", () => {
  it("runs work exactly once when two submits overlap", async () => {
    const submitOnce = createSubmitOnce();
    let calls = 0;

    const work = async () => {
      calls += 1;
      await new Promise((r) => setTimeout(r, 40));
      return `booking-${calls}`;
    };

    const [first, second] = await Promise.all([
      submitOnce(work),
      submitOnce(work),
    ]);

    assert.equal(calls, 1);
    assert.deepEqual(first, { ran: true, value: "booking-1" });
    assert.deepEqual(second, { ran: false });
  });

  it("allows a second booking after the first finishes", async () => {
    const submitOnce = createSubmitOnce();
    let calls = 0;

    const work = async () => {
      calls += 1;
      return calls;
    };

    const first = await submitOnce(work);
    const second = await submitOnce(work);

    assert.equal(calls, 2);
    assert.deepEqual(first, { ran: true, value: 1 });
    assert.deepEqual(second, { ran: true, value: 2 });
  });
});
