
export default function Algemeen (props) {

    return (
        <div>
            <h1>
                {props.titel}
            </h1>
            <div>
                <img height={400} src={props.img}/>
                <p>
                    {props.info}
                </p>
            </div>
        </div>
    )
}