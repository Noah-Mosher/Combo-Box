export const FruitListBuilder = (list) => {
    for( let i = 0 ; i < list.length; i++) {
        return(
            <div></div>
            <li key={list.name}>{list.icon}{list.name}</li>
        )
    }
}