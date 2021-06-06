create table dbo.Produktet
(
ProduktetId		int identity (1,1),
Emri			varchar(45),
CmimiAktual		int,
CmimiStartues	int,
Pershkrimi		varchar(200),
Kompania		varchar(45),
Foto			varchar(100)
)

select * from Produktet

/* Delete */
drop table Produktet