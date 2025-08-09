const Card = ({ item, onClick }) => {
    return (

        <div className="cards">
            <div className='card' onClick={() => onClick(item.id)}>
                <div className='bg-image'>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className='card-body'>
                    <h2>{item.name}</h2>
                    <h3>{item.race} - {item.gender}</h3>
                    <h4>Base KI:<br /><span>{item.ki}</span></h4>
                    <h4>Total KI:<br /><span>{item.maxKi}</span></h4>
                    <h4>Affiliation:<br /><span>{item.affiliation}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Card;