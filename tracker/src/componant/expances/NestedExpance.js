import React from 'react';
import './NestedExpance.css';

import Expance from './Expance';

import Card from '../UI/Card';

const NestedExpance = (props) => {
    return (
        <Card className="expanceclass">
            {
                props.item.map(
                    expance => (
                        <Expance
                           id={expance.id}
                            date={expance.date}
                            title={expance.title}
                            amount={expance.amount} />

                    )
                )
            }





        </Card>

    );


}


export default NestedExpance;