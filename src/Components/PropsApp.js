import React from 'react'
import ContactCard from './ContactCard'

function PropsApp(params) {
return(
    <div className="contacts">
        <ContactCard name="Pan Radal" 
                    imgUrl='https://www.psy.pl/wp-content/uploads/2016/08/wilczak7-e1507118849924.jpg'
                    phone="333444333"
                    email="piesek@piesek.pl"
        />
                    
        <ContactCard name="Pan Michal" 
                    imgUrl='https://www.psy.pl/wp-content/uploads/2016/08/wilczak2-e1507118718314.jpg'
                    phone="888555444"
                    email="piesek2@piesek.pl"
        />        
        <ContactCard name="Pan Pawel" 
                    imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Czechoslovakian_Wolfdog_pair.jpg/280px-Czechoslovakian_Wolfdog_pair.jpg'
                    phone="333444333"
                    email="piesek3@piesek.pl"
        />        
        <ContactCard name="Pan Seba" 
                    imgUrl='https://www.psy.pl/wp-content/uploads/2016/08/wilczak4-864x575.jpg'
                    phone="998745632"
                    email="piesek4@piesek.pl"
        />
    </div>
)
    
}

export default PropsApp