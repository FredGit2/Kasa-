const Tag = (props) => {
    return (
        <div className='housing__tags'>
            {
                props.tag && props.tag.map((tag, index) => {
                    return <div className='tag' key={'tag' + index}><span>{tag}</span></div>
                })
            }
        </div>
    );
};

export default Tag;