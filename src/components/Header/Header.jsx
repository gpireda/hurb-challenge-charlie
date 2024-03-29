import React from 'react'
import PropTypes from 'prop-types'
import Input from 'components/Input/Input'
import Compass from 'icons/compass.svg'
import useInput from 'hooks/useInput'
import i18n from 'utils/i18n'
import styles from './Header.module.scss'

const Header = ({ city, disabled, onCityChanged }) => {
  const { handleSubmit, text, setText } = useInput(city, onCityChanged)

  const placeholder = disabled ? '' : text || i18n('Type in the location name')

  return (
    <header className={styles.header} data-testid='input-header'>
      <label htmlFor='locale-input'>
        <Compass data-testid='label-icon' />
      </label>

      <Input
        disabled={disabled}
        onChange={setText}
        onSubmit={handleSubmit}
        placeholder={placeholder}
        text={text}
      />
    </header>
  )
}

Header.propTypes = {
  city: PropTypes.string,
  disabled: PropTypes.bool,
  onCityChanged: PropTypes.func.isRequired,
  state: PropTypes.string,
}

export default Header
