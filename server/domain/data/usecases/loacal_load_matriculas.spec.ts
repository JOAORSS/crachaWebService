class LocalLoadMatriculas{
    constructor(private readonly CacheStore: CacheStore){
        
    }
    puxarDadosCache(){
        this.CacheStore.calls();
    }
}

interface CacheStore{
    calls: () => void
}

class CacheStoreSpy implements CacheStore {
    callCount = 0;

    calls (): void {
        this.callCount++
    }
}



describe('LocalSaveMatriculas', () => {
    test('Deveria chamar o CacheStore pelo menos uma vez sut.init', () => {
        const cacheStore = new CacheStoreSpy(); 
        const sut = new LocalLoadMatriculas(cacheStore);
        sut.puxarDadosCache()
        expect(cacheStore.callCount).toBe(1);
    })
})