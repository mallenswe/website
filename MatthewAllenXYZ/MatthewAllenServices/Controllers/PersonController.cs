using MatthewAllenServices.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MatthewAllenServices.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private string connectionString = LocalEnvironment.ConnectionString;
        /// <summary>
        /// Gets a Persons details based on the businessEntityID
        /// </summary>
        /// <param name="businessEntityID"></param>
        /// <returns>Person</returns>
        [HttpGet]
        public Person Get([FromQuery] int businessEntityID)
        {

            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                Person person = new Person();
                
                //builder.DataSource = LocalEnvironment.DataSource;
                //builder.InitialCatalog = LocalEnvironment.InitialCatalog;
                //builder.UserID = LocalEnvironment.UserID;
                //builder.Password = LocalEnvironment.Password;

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    Debug.WriteLine("\nQuery data example: ");
                    Debug.WriteLine("=======================\n");
                    connection.Open();
                    SqlCommand command = new SqlCommand("GetPersonByBusinessEntityID", connection)
                    {
                        CommandType = System.Data.CommandType.StoredProcedure
                    };
                    command.Parameters.AddWithValue("@BusinessEntityID", businessEntityID);

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            if (reader.HasRows)
                            {
                                Debug.WriteLine("FirstName", reader["FirstName"].ToString());
                                person.BusinessEntityID = Convert.ToInt32(reader["BusinessEntityID"]);
                                person.Title = reader["Title"].ToString();
                                person.FirstName = reader["FirstName"].ToString();
                                person.LastName = reader["LastName"].ToString();
                                person.PhoneNumber = reader["PhoneNumber"].ToString();
                                person.PhoneType = reader["PhoneType"].ToString();
                                person.EmailAddress = reader["EmailAddress"].ToString();
                                person.AddressLine1 = reader["AddressLine1"].ToString();
                                person.AddressLine2 = reader["AddressLine2"].ToString();
                                person.City = reader["City"].ToString();
                                person.PostalCode = reader["PostalCode"].ToString();
                                person.StateName = reader["StateName"].ToString();
                                person.CountryName = reader["CountryName"].ToString();
                            }
                        }
                    }
                }

                Person personDefault = new Person
                {
                    BusinessEntityID = 1,
                    Title = "Mr.",
                    FirstName = "Matthew",
                    LastName = "Allen",
                    PhoneNumber = "999-999-9999",
                    PhoneType = "Cell",
                    EmailAddress = "1st Main Street",
                    AddressLine1 = "Suite 343",
                    AddressLine2 = "",
                    City = "Redmond",
                    PostalCode = "98052",
                    StateName = "Washington",
                    CountryName = "United States",
                };

                return businessEntityID == 1 ? personDefault : person;
            }
            catch (SqlException e)
            {
                Debug.WriteLine(e.ToString());
                throw new ArgumentException("Invalid BusinessEntityID");
            }
        }

        /// <summary>
        /// Gets a list of people by person count
        /// </summary>
        /// <param name="employeeAmount"></param>
        /// <returns>List of Employees</returns>
        [HttpGet]
        [Route("GetEmployeeList")]
        public List<Person> GetEmployeeList([FromQuery] int employeeAmount)
        {

            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                List<Person> employeeList = new List<Person>();

                //builder.DataSource = LocalEnvironment.DataSource;
                //builder.InitialCatalog = LocalEnvironment.InitialCatalog;
                //builder.UserID = LocalEnvironment.UserID;
                //builder.Password = LocalEnvironment.Password;

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    Debug.WriteLine("\nQuery data example: ");
                    Debug.WriteLine("=======================\n");
                    connection.Open();
                    SqlCommand command = new SqlCommand("GetEmployeeList", connection)
                    {
                        CommandType = System.Data.CommandType.StoredProcedure
                    };
                    command.Parameters.AddWithValue("@EmployeeAmount", employeeAmount);

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            if (reader.HasRows)
                            {
                                Debug.WriteLine("FirstName", reader["FirstName"].ToString());
                                Person person = new Person();
                                person.BusinessEntityID = Convert.ToInt32(reader["BusinessEntityID"]);
                                person.Title = reader["Title"].ToString();
                                person.FirstName = reader["FirstName"].ToString();
                                person.LastName = reader["LastName"].ToString();
                                person.PhoneNumber = reader["PhoneNumber"].ToString();
                                person.PhoneType = reader["PhoneType"].ToString();
                                person.EmailAddress = reader["EmailAddress"].ToString();
                                person.AddressLine1 = reader["AddressLine1"].ToString();
                                person.AddressLine2 = reader["AddressLine2"].ToString();
                                person.City = reader["City"].ToString();
                                person.PostalCode = reader["PostalCode"].ToString();
                                person.StateName = reader["StateName"].ToString();
                                person.CountryName = reader["CountryName"].ToString();

                                employeeList.Add(person);
                            }
                        }
                    }
                }

                return employeeList;
            }
            catch (SqlException e)
            {
                Debug.WriteLine(e.ToString());
                throw new ArgumentException("Invalid BusinessEntityID");
            }
        }
        //// GET api/<PersonController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<PersonController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<PersonController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<PersonController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
