create table dbo.Kompania
(
KompaniaId		int identity (1,1),
Emri			varchar(35),
NrBiznesit		varchar(9),
Vendi			varchar(35)
)

select * from Kompania

/* Delete */
drop table Kompania