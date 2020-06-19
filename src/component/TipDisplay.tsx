import React, { useState, useEffect } from "react";

export default function TipDisplay(props: any) {
    const { tip } = props;
    const [ coins, setCoins ] = useState(0);
    const [ smallBags, setSmallBags ] = useState(0);
    const [ mediumBags, setMediumBags ] = useState(0);
    const [ largeBags, setLargeBags ] = useState(0);

    useEffect(() => {
        let workingTip = tip;
        setLargeBags(Math.floor(workingTip / 99000));
        workingTip %= 99000;
        setMediumBags(Math.floor(workingTip / 10000));
        workingTip %= 10000;
        setSmallBags(Math.floor(workingTip / 1000));
        workingTip %= 1000;
        setCoins(Math.floor(workingTip / 100));
    }, [tip]);

    return (
        <div className={"tip-display"}>
            <span>Thats...</span><br/>
            <span>{largeBags} large bell bags,</span><br/>
            <span>{mediumBags} medium bell bags,</span><br/>
            <span>{smallBags} small bell bags,</span><br/>
            <span>and {coins} coins</span>
        </div>
    );
}
