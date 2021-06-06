create table dbo.Personi
(
PersoniId			int identity (1,1),
EmriMbiemri			varchar(45),
EmriPerdoruesit		varchar(45),
Vendi				varchar(45),
NrPikave			int,
NrTelefonit			varchar(9),
NrLeternjoftimit	varchar(10),
Email				varchar(35)
)

select * from Personi

/* Delete */
drop table Personi