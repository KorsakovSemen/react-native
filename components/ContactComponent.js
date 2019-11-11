import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';

function Contact() {
    return(
        <Card
            title="Contact information"
        >
            <Text>
                Our History

                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

                The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.

                Our Address

                121, Clear Water Bay Road
                Clear Water Bay, Kowloon
                HONG KONG
                Tel: +852 1234 5678
                Fax: +852 8765 4321
                Email:confusion@food.net</Text>
        </Card>
    )
}

export default Contact;
