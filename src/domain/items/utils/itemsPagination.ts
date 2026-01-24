export function getTotalPages(totalCount: number, pageSize: number) {
  return Math.max(1, Math.ceil(totalCount / pageSize));
}

export function getPageGroupRange(currentPage: number, totalPages: number, pageGroupSize: number) {
  const pageGroupStart = Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
  const pageGroupEnd = Math.min(pageGroupStart + pageGroupSize - 1, totalPages);

  return { pageGroupStart, pageGroupEnd };
}
