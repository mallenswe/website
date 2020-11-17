using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatthewAllenServices.Models
{
    public class Person
    {
        public int BusinessEntityID { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneType { get; set; }
        public string EmailAddress { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string StateName { get; set; }
        public string CountryName { get; set; }
    }
}
