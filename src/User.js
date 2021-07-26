import React from "react"
import PropTypes from "prop-types"

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'John Dao'
 * return (
 *   <User age={age} name={name} />
 * )
 * 
 * @see https://github.com/calvin/axios-hooks
 * @todo implement method A
 * @todo implement method B
 * 
 * @category User Management
 */
const User = props => {
  const { name, age } = props

  /**
   * Return fullname
   * @param {string} firstname Fullname of user
   * @param {string} lastname Lastname of user
   * @returns string
   */
  const getFullname = (firstname, lastname) => {
    return firstname + ' ' + lastname;
  }

  return (
    <p>
      {name} is {age} years old.
    </p>
  )
}

User.propTypes = {
  /**
   * User's name
   */
  name: PropTypes.string.isRequired,
  /**
   * User's age
   */
  age: PropTypes.number,
}

User.defaultProps = {
  name: "David Koo",
  age: 21,
}

export default User;