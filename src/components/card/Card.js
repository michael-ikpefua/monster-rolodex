import './card-list.css'
export const Card =  ({monster}) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${monster.id}?set=set2`} alt='monster' />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}