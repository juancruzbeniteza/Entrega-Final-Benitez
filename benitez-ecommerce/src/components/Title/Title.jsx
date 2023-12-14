import './Title.css'

const Title = ({title, subTitle}) => {
    
    return (
        <div className="backTittle">
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
        </div>
    )
}

export default Title
