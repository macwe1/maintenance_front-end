import { increment, decrement } from '@store/counter/counterActions'
import { Slider } from '@components/slider/Slider'
import { AppState } from '@store/store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = ({ counter }: AppState) => ({
  count: counter.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: () => dispatch(increment),
  remove: () => dispatch(decrement),
})

const SliderContainers = connect(mapStateToProps, mapDispatchToProps)(Slider)
export default SliderContainers
