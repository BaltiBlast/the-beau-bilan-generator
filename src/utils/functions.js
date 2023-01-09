export function getBilansTypes() {
    const bilansTypes = []
    for(const bilan of data){
      let bilanObject = {
        name: bilan.name,
        id: bilan.id
      }
      bilansTypes.push(bilanObject)
    }
    return bilansTypes
  },