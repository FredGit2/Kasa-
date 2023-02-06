const Host = (props) => {

    return (
        <div className="host__container">
            <p className='host__name'>{props.name}</p>
            <img className='host__avatar' src={props.img} alt="avatar" />
        </div>
    );
};

export default Host;
