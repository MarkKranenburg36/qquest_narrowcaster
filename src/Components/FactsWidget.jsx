import { useEffect, useState } from "react"
import { factsApi } from "../API-requests/facts"
import liftQr from "./../../public/assets/Images/lift-QR.png";
import intranet from "./../../public/assets/Images/intranet-qr.png";
import "./widget.css"

export default function FactsWidget() {
    const [facts, setFacts] = useState()
    useEffect(() => {

        const getFunFacts = async () => {
            try {
                const facts = await factsApi();
                setFacts(facts)
            } catch (e) {
                console.error(e)
            }
        }
        getFunFacts()
        const factInterval = setInterval(getFunFacts, 60 * 1000 * 10)

        return () => {
            clearInterval(factInterval)
        }
    }, [])
    console.log(facts)
    return (
        <div className="facts widget">
            <div className="fact">
                {/* <p>Here comes the fact</p> */}
                {(facts && facts.length > 0) && 
                <div>
                    <p>Fun fact: </p>
                    <p>{facts[0].fact}</p>
                </div>}
            </div>
            <div className="QR">
                <div className="intranet">
                <img src={intranet} width={100} height={100} alt="intranet QR"/>
                <p>Qquest Intranet</p>
                </div>
                <div className="lift">
                <img src={liftQr} width={100} height={100} alt="lift QR" />
                <p>Lift</p>
                </div>
                
            </div>
        </div>
    )
}