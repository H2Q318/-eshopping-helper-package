interface SortTransform {
  sort: string;
  order: 'ASC' | 'DESC';
}

const SortDirection = {
  '-': 'DESC',
  '+': 'ASC',
};

export class Sort {
  static produce({ sort }: { sort: string | string[] }): SortTransform[] {
    let listSort: SortTransform[] = [];

    if (!sort || sort.length === 0) return listSort;

    if (typeof sort === 'string') {
      listSort.push(this.transform(sort));
      return listSort;
    }

    if (typeof sort === 'object') {
      listSort = sort.map((item) => this.transform(item));
    }

    return listSort;
  }

  static transform(sort = ''): SortTransform {
    const sortSchema = {
      sort: '',
      order: SortDirection['-'],
    };
    const signCharacter = sort[0] as '-' | '+';
    const isDescendingDirection = SortDirection[signCharacter] === SortDirection['-'];

    if (isDescendingDirection) {
      sortSchema.sort = sort.slice(1, sort.length);
      return sortSchema as SortTransform;
    }

    sortSchema.sort = sort;
    sortSchema.order = SortDirection['+'];

    return sortSchema as SortTransform;
  }
}
