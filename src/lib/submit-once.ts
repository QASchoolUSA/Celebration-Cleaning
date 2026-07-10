/**
 * Synchronous lock so overlapping async submits (e.g. double-click)
 * only run the work function once until it settles.
 */
export function createSubmitOnce() {
  let locked = false;

  return async function submitOnce<T>(
    work: () => Promise<T>,
  ): Promise<{ ran: true; value: T } | { ran: false }> {
    if (locked) {
      return { ran: false };
    }
    locked = true;
    try {
      const value = await work();
      return { ran: true, value };
    } finally {
      locked = false;
    }
  };
}
