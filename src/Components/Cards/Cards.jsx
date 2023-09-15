import PropTypes from 'prop-types';
import Card from '../Card/Card';

function Cards({ courses }) {

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1'>
      {courses.map((card)=> <Card key={card.id} card={card}></Card>)}
    </div>
  )
}

Cards.propTypes = {
  courses: PropTypes.array.isRequired
}

export default Cards;