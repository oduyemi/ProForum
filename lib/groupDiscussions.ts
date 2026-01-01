// lib/groupDiscussions.ts
import dayjs from "dayjs";

export function groupDiscussionsByDay(items: any[]) {
  const today = dayjs();
  const yesterday = today.subtract(1, "day");

  const groups: Record<string, any[]> = {
    Today: [],
    Yesterday: [],
    Earlier: [],
  };

  items.forEach((item) => {
    const date = dayjs(item.createdAt);

    if (date.isSame(today, "day")) {
      groups.Today.push(item);
    } else if (date.isSame(yesterday, "day")) {
      groups.Yesterday.push(item);
    } else {
      groups.Earlier.push(item);
    }
  });

  return Object.entries(groups)
    .filter(([, items]) => items.length)
    .map(([label, items]) => ({ label, items }));
}
