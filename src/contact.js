import './contact.css';

function createContact() {
    const contact = document.createElement('div');
    contact.classList = 'contact';
    const contactUs = document.createElement('p');
    const contactUsTxt = document.createTextNode('Contact Us');
    contactUs.classList.add('contact-head');
    contactUs.append(contactUsTxt);
    const mapDiv = document.createElement('div');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    mapDiv.classList.add('map');
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.8938155666615!2d-79.69609774996539!3d44.39430141210893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa327e3940045%3A0x8e86c44af5d023fe!2sBarrie%20Barbeque%20Chicken!5e0!3m2!1sen!2sca!4v1643651931527!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursTxt = document.createElement('p');
    hoursTxt.append(document.createTextNode('Hours:'));
    hoursTxt.className = 'hoursTxt';
    const hoursList = document.createElement('ul');
    const hoursMonSat = document.createElement('li');
    const hoursSun = document.createElement('li');
    hoursMonSat.innerText = 'Monday-Saturday: 11:00am - 10:00pm';
    hoursSun.innerText = 'Sunday - 3:00pm: 10:00pm';
    const contactMsg = document.createElement('p');
    contactMsg.append(document.createTextNode('Call 123-456-7890 to order for pickup or delivery! (cash only). Free delivery over $30!'));
    const directions = document.createElement('p');
    directions.append(document.createTextNode('At the North-East corner of Bayfield and Wellington in the plaza.'));
    directions.className = 'directions';
    hoursList.append(hoursMonSat, hoursSun);
    hours.append(hoursTxt, hoursList, contactMsg, directions);
    wrapper.append(mapDiv, hours, directions);
    contact.append(contactUs, wrapper);

    return contact;
}

export default createContact;
