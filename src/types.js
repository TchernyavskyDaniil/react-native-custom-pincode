import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

export const types = {
  leftElement: PropTypes.element,
  leftElementCallback: PropTypes.func,
  rightElement: PropTypes.element,
  rightElementCallback: PropTypes.func,
  bottomElement: PropTypes.element,
  bottomCallback: PropTypes.func,
  bottomElementStyle: ViewPropTypes.style,
  isBottom: PropTypes.bool,
  pinButtonStyle: ViewPropTypes.style,
  leftButtonStyle: ViewPropTypes.style,
  rightButtonStyle: ViewPropTypes.style,
  leftContainerStyle: ViewPropTypes.style,
  rightContainerStyle: ViewPropTypes.style,
  isDeleteButton: PropTypes.bool,
  buttonDeleteElement: PropTypes.element,
  buttonDeletePosition: PropTypes.string,
  pinContainerStyles: ViewPropTypes.style,
  containerStyles: ViewPropTypes.style,
  isLeft: PropTypes.bool,
  isRight: PropTypes.bool,
  zeroButtonStyle: ViewPropTypes.style,
  completeCallback: PropTypes.func,
  pinLength: PropTypes.number,
  pointsLength: PropTypes.number,
  keyButtons: PropTypes.string,
  pointStyle: ViewPropTypes.style,
  pointActiveStyle: ViewPropTypes.style,
  pointsStyle: ViewPropTypes.style,
  keyPoints: PropTypes.string,
  isPinError: PropTypes.bool,
  errorPointStyles: ViewPropTypes.style,
}
