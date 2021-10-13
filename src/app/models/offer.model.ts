export class Offer{

    private _id: string|null;
    private _name: string;
    private _description: string;
    private _dateBegin: Date;
    private _dateEnd: Date;
    private _imgUrl: string;
    private _createdAt: Date;
    private _updatedAt: Date;


    constructor(name: string, description: string, dateBegin: Date,
                dateEnd: Date, imgUrl: string, createdAt: Date, updatedAt: Date,
                id?: string
    ) {
        if (typeof id === 'string') {
            this._id = id;
        }else{
            this._id = null;
        }
        this._name = name;
        this._description = description;
        this._dateBegin = dateBegin;
        this._dateEnd = dateEnd;
        this._imgUrl = imgUrl;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id(): string|null {
        return this._id;
    }

    set id(value: string|null) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get dateBegin(): Date {
        return this._dateBegin;
    }

    set dateBegin(value: Date) {
        this._dateBegin = value;
    }

    get dateEnd(): Date {
        return this._dateEnd;
    }

    set dateEnd(value: Date) {
        this._dateEnd = value;
    }

    get imgUrl(): string {
        return this._imgUrl;
    }

    set imgUrl(value: string) {
        this._imgUrl = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    static fromJSON(offerAsJSON: any): Offer {
        return new Offer(
            offerAsJSON.name,
            offerAsJSON.description,
            offerAsJSON.dateBegin,
            offerAsJSON.dateEnd,
            offerAsJSON.imgUrl,
            offerAsJSON.createdAt,
            offerAsJSON.updatedAt,
            offerAsJSON._id
        );
    }

     toJSON():any{

        return {
            _id: this.id,
            name: this.name,
            description: this.description,
            dateBegin: this.dateBegin,
            dateEnd: this.dateEnd,
            imgUrl: this.imgUrl,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}
