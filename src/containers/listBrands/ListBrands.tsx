import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(
  () => import('../../components/listBrands/ListBrands'),
  {
    ssr: false,
  }
) // import { ListServices } from '@components/listBrands/ListBrands'
import { increment, decrement } from '@store/counter/counterActions'
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

export const ListBrandsContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicComponent)
