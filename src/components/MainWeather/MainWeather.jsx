import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import i18n from 'utils/i18n'
import useTemperatureFormatter from 'hooks/useTemperatureFormatter'

const MainWeather = ({ day, temperature }) => {
  const { formattedTemperature, handleTemperatureUnitToggle } = useTemperatureFormatter(temperature)

  return (
    <>
      <Title uppercase>{i18n(day)}</Title>
      <Text onClick={handleTemperatureUnitToggle}>{formattedTemperature}</Text>
    </>
  )
}

MainWeather.propTypes = {
  day: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
}

export default MainWeather
