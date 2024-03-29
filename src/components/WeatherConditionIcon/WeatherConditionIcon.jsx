import React from 'react'
import PropTypes from 'prop-types'
import { mapConditionToIcon } from 'helpers'
import styles from './WeatherConditionIcon.module.scss'

const WeatherConditionIcon = ({ descriptionId, sunRise, sunSet }) => (
  <div className={styles.icon}>
    {descriptionId && mapConditionToIcon(descriptionId, sunRise, sunSet)}
  </div>
)

WeatherConditionIcon.propTypes = {
  descriptionId: PropTypes.number,
  sunRise: PropTypes.number,
  sunSet: PropTypes.number,
}

export default WeatherConditionIcon
