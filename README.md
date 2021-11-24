

# da imparare 
css

# REGOLE D' ORO

quando setto un valore con useState, sui valori array e oggetto, li passo sempre cosi

[...valori]
{...oggetto}

ma se chiamo sort, o push del array, lo devo fare su una copia, se no modifica il valore originale
esempio  persone.sort(ordinaPersone); --> persone qui ora ha gli elementi scambiati

Esempio con sort :
const newPersone = [...persone].sort(ordinaPersone)
[...persone] --> crea un clone, variabile indipendete (che punta non alla stessa memoria di persone), e fa il sort sul clone,
persone rimane invariato. 

Esempio con push
persone.push(elemento) --> ora persone ha un elemento in più
quindi potrei fare:
const newPersone =  [...persone].push(elemento)
ma se faccio console.log di newPersone, mi da il numero degli elementi di persone, perchè push restituisce l'indice del ultimo elemento inserito !! 

Quindi faccio cosi : 

const newPersone = [...persone];
newPersone.push(elemento);
  
   non mi interessa il numero del utimo indice, push altera clonePersone e non persone,
  ma per dare uniformità al codice si tende a non usare la funzione push, ma lo spread operator

const newPersone = [...persone, elemento]; accodo in questa forma, che mi da l'array nuovo allegando tutti i valori di persone, e come ultimo elemento elemento

vedi  https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript
