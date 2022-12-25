/****** create the database  ******/
USE [master]
GO

/****** Object:  Database [elshubank]    Script Date: 12/25/2022 8:11:54 AM ******/
CREATE DATABASE [elshubank]

USE [elshubank]
GO

USE [elshubank]
GO

/****** Object:  Table [dbo].[accounts]    Script Date: 12/25/2022 8:14:50 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[accounts](
	[transactionId] [int] IDENTITY(1,1) NOT NULL,
	[account_no] [bigint] NOT NULL,
	[balance] [float] NOT NULL,
 CONSTRAINT [PK_accounts_1] PRIMARY KEY CLUSTERED 
(
	[transactionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[accounts] ADD  CONSTRAINT [DF_accounts_balance]  DEFAULT ((0)) FOR [balance]
GO

USE [elshubank]
GO

/****** Object:  Table [dbo].[clients]    Script Date: 12/25/2022 8:16:13 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[clients](
	[account_no] [bigint] IDENTITY(1000,1) NOT NULL,
	[firstName] [nvarchar](50) NOT NULL,
	[lastName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_clients_1] PRIMARY KEY CLUSTERED 
(
	[account_no] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [elshubank]
GO

/****** Object:  StoredProcedure [dbo].[createNewClient]    Script Date: 12/25/2022 8:17:07 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

/****** Script for SelectTopNRows command from SSMS  ******/
  create proc [dbo].[createNewClient] 
  @firstName nvarchar(50),
  @lastName nvarchar(50),
  @balance float
  AS

  BEGIN
		BEGIN TRAN
		Declare @accountNo bigint

		insert into [dbo].[clients] (firstName, lastName) values (@firstName, @lastName)

		/* SCOPE_IDENTITY() returns the last 14*/ 

		 SET @accountNo = SCOPE_IDENTITY();

		insert into [dbo].[accounts]  (account_no, balance)values( @accountNo,@balance)

		 COMMIT TRANSACTION;
  END
GO

/*Seed the database */
  execute createNewClient @firstName ='Monica', @lastName = 'Geller', @balance = 2343.50
  execute createNewClient @firstName ='Chandler', @lastName = 'Baing', @balance = 4356.43
  execute createNewClient @firstName ='Reachel', @lastName = 'Green', @balance = 300.67
  execute createNewClient @firstName ='Phobe', @lastName = 'Buffet', @balance = 100.00
  execute createNewClient @firstName ='Joe', @lastName = 'Tribiani', @balance = 20000.56
  execute createNewClient @firstName ='Ross', @lastName = 'Geller', @balance = 34566.64
  
  /*  Deleter command
	  BEGIN TRAN
        Delete FROM [elshubank].[dbo].[accounts] WHERE account_no = 1000
        Delete FROM [elshubank].[dbo].[accounts] WHERE account_no = 1000
        COMMIT TRAN
		*/

