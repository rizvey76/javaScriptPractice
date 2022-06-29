(
    async function(){
        const{add}=await import('./util.js');
        const{remove}=await import('./util.js');
        add();
        remove();
    }
)();