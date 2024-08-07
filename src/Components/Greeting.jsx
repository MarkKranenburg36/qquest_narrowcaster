const Greeting = () => {
    const getGreeting = () => {
        let greeting = (
            getTimeOfDay() == 'morning' ?
                'Goedemorgen!'
                :
                getTimeOfDay() == 'afternoon'
                    ? 'Goedemiddag!'
                    :
                    'Goedeavond!'
        )
        return greeting;
    }

    const getTimeOfDay = () => {
        let time = new Date().getHours();
        let period = time < 12 ? 'morning' : (time >= 12 && time < 18 ? 'afternoon' : 'evening');
        return period;
    }

    return (
        <>
            <h1 id="greeting">{getGreeting()}</h1>
        </>
    )
}

export default Greeting;