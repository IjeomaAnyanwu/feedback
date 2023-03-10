import Card from './shared/Card'
import PropTypes from 'prop-types'

const FeedbackItem = ({item}) => {

  return (
    <Card reverse ={true}>
        <div className="num-display">{item.rating}</div>
           <div className="text-display">{item.text}</div> 
    </Card>
  )
}

FeedbackItem.proptypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem