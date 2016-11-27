export class Record {
    constructor(
        public id: number,
        public details: Details[],
        private question: any,
        private answer?: any
    ) {  }
}

export class Details {
    title: string;
    content: string;
}