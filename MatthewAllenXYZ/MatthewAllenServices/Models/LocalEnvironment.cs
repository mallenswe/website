using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MatthewAllenServices.Models
{
    public class LocalEnvironment
    {
        public static string DataSource { get; set; }
        public static string InitialCatalog { get; set; }
        public static string UserID { get; set; }
        public static string Password { get; set; }
        public static string ConnectionString { get; set; }
    }
}
