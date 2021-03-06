//TODO　共通値管理　削除予定
export class ManageValue {

    public static loading:string = "before";
    private static values : Map<string, any> = new Map<string, any>();

    static setValue<T>(key:string,target:T)
    {
        this.values.set(key,target);
    }

    static getValue<T>(key:string):T
    {
        if(this.values.has(key))
        {
            return this.values.get(key);
        }
        return null;
    }

    static has(key)
    {
        return this.values.has(key);
    }
}