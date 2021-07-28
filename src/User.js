import React from "react"
// import PropTypes from "prop-types"

/**
 * Component for showing details of the user.
 *
 * @component
 * @prop {string} name - user name, this is required.
 * @prop {number} age - user age, you can ignore this.
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
const User = ({ name, age }) => {

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


/**
 * Component for another user.
 *
 * @component
 * @example
 * return (
 *   <UserAnother />
 * )
 * 
 * @category User Management
 */
 const UserAnother = () => {

  return (
    <p>
      Another component
    </p>
  )
}


// User.propTypes = {
//   /**
//    * User's name
//    */
//   name: PropTypes.string.isRequired,
//   /**
//    * User's age
//    */
//   age: PropTypes.number,
// }

// User.defaultProps = {
//   name: "David Koo",
//   age: 21,
// }

export default User;