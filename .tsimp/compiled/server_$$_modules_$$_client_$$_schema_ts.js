/////////// tabela com do nosso banco mas como se fosse uma classe //////////////
class schema {
    constructor(matricula, nome, token, ultimoAcesso) {
        Object.defineProperty(this, "matricula", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nome", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ultimoAcesso", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.matricula = matricula;
        this.nome = nome;
        this.token = token;
        this.ultimoAcesso = ultimoAcesso;
    }
}
export default schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tpbmd0L09uZURyaXZlL0RvY3VtZW50b3MvSUYvY3JhY2hhV2ViU2VydmljZS9zZXJ2ZXIvIiwic291cmNlcyI6WyJtb2R1bGVzL2NsaWVudC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQWlGO0FBU2pGLE1BQU0sTUFBTTtJQU1SLFlBQVksU0FBaUIsRUFBRSxJQUFZLEVBQUUsS0FBYSxFQUFFLFlBQW9CO1FBTHpFOzs7OztXQUFTO1FBQ1Q7Ozs7O1dBQUk7UUFDSjs7Ozs7V0FBSztRQUNMOzs7OztXQUFZO1FBR2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7SUFDcEMsQ0FBQztDQUNKO0FBRUQsZUFBZSxNQUFNLENBQUMifQ==