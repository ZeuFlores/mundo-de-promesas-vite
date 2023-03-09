export default function CharCard({name, image}){
    return(
        <div>
            <img src={image} width="50" />
            <p style={{ fontSize:12, fontFamily:'sans-serif'}}> {name}</p>
        </div>
    )
}