export class Record {
    constructor(
        public id: number,
        public details: Details[],
        private created_by_id?: number,
        private component_key?: string,
        private business_id?: number,

        private updated_date?: any,
        private created_date?: any,
        private tags?: string[],
        private status?: string,
        private history?: JSON,

        private form_key?: string,
        private shared_with?: number[],
        private related_to_id?: number,
        private deadline?: any
    ) {  }

    get getId(): number {
        return this.id;
    }
}

export class Details {
    title: string;
    content: string;
}