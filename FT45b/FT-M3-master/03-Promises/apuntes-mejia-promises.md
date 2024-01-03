#Promesas - Promises

Sintaxis

La función pasada a new Promise se llama ejecutor. Cuando se crea new Promise , el ejecutor corre automáticamente.

```javascript
    const promise = new Promise ( function ( resolve , reject ) { 
        // Ejecutor (el código productor, "cantante") 
    } ) ; 
```

