class ComplexClass {
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    
    performComplexOperation() {
        let result = 0;
        for (let i = 0; i < this.param1; i++) {
        for (let j = 0; j < this.param2; j++) {
            result += i * j;
        }
        }
        return result;
    }
    
    async performAsyncOperation() {
        try {
        const data = await fetchData();
        const processedData = this.processData(data);
        await this.saveData(processedData);
        return processedData;
        } catch (error) {
        console.error('Erro durante a operação assíncrona:', error);
        throw error;
        }
    }
    
    processData(data) {
        let result = [];
        for (const item of data) {
        if (item.isValid()) {
            result.push(item.transform());
        }
        }
        return result;
    }
    
    async saveData(data) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Dados salvos com sucesso:', data);
            resolve();
        }, 2000);
        });
    }
    }
    
    async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = [/* Dados fictícios */];
        resolve(data);
        }, 3000);
    });
    }
    
    const complexInstance = new ComplexClass(10, 20);
    
    complexInstance.performAsyncOperation()
    .then(result => {
        console.log('Operação assíncrona concluída:', result);
    })
    .catch(error => {
        console.error('Erro durante a execução:', error);
    });