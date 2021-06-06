using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Ankandi_Back_End.Models;

namespace Ankandi_Back_End.Controllers
{
    public class KompaniaController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select KompaniaId, Emri, NrBiznesit, Vendi from
                    dbo.Kompania
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["AnkandiAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);

        }

        public string Post(Kompania kom)
        {
            try
            {
                string query = @"
                        insert into dbo.Kompania values
                        (
                        '" + kom.Emri + @"',
                        '" + kom.NrBiznesit + @"',
                        '" + kom.Vendi + @"'
                        )
                        ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["AnkandiAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "U shtua nje kompani me sukses!";

            }
            catch (Exception)
            {
                return "Shtimi i nje kompanis deshtoj!";
            }
        }

        public string Put(Kompania kom)
        {
            try
            {
                string query = @"
                        update dbo.Kompania set 
                        Emri= '" + kom.Emri + @"'
                        ,NrBiznesit= '" + kom.NrBiznesit + @"'
                        ,Vendi= '" + kom.Vendi + @"'
                        where KompaniaId= " + kom.KompaniaId + @"
                        ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["AnkandiAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Kompania eshte bere Update!";

            }
            catch (Exception)
            {
                return "Update i kompains deshtoj!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                        delete from  dbo.Kompania 
                        where KompaniaId = " + id + @"
                        ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["AnkandiAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Kompania eshte fshir me sukses!";

            }
            catch (Exception)
            {
                return "Fshirja e kompanis nuk eshte realizuar!";
            }
        }
    }
}
