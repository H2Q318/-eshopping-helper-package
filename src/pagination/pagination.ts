const PAGINATION = Object.freeze({
  MAX_PAGE: 1000,
  MAX_LIMIT: 24,
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
});

export class Pagination {
  private static MAX_PAGE = PAGINATION.MAX_PAGE;
  private static MAX_LIMIT = PAGINATION.MAX_LIMIT;
  private static DEFAULT_PAGE = PAGINATION.DEFAULT_PAGE;
  private static DEFAULT_LIMIT = PAGINATION.MAX_LIMIT;

  static produce({ page, limit }: { page: string | number; limit: string | number }) {
    let parsedPage: number = (typeof page === 'string' && Number.parseInt(page)) || (page as number);
    let parsedLimit: number = (typeof limit === 'string' && Number.parseInt(limit)) || (limit as number);

    if (Number.isNaN(parsedPage)) {
      parsedPage = Pagination.DEFAULT_PAGE;
      parsedPage = Pagination.DEFAULT_LIMIT;
    } else if (parsedPage > Pagination.MAX_PAGE) {
      throw new Error('Page reach max');
    }

    if (Number.isNaN(parsedLimit)) {
      parsedLimit = Pagination.DEFAULT_LIMIT;
    } else if (parsedLimit > Pagination.MAX_LIMIT) {
      throw new Error('Limit reach max');
    }

    return {
      page: parsedPage,
      limit: parsedLimit,
      offset: (parsedPage - 1) * parsedLimit,
    };
  }
}
