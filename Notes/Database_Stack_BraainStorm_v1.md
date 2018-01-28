[Brainstorm tech stack of the app phase 1]{.underline}
======================================================

[The Right React Native database]{.underline}

Poorly chosen Database can lead to failures for your React Native
application.

Local Database Options:

-RealM

    -Performance

        -Real time synchronization -- real time sync in with Realm
            and React Native

        -Realm database was built from scratch for offline and
            real-time applications running on mobile and wearable
            devices

        -**Zero-copy**: simply calculates the offset, reads from the
            memory mapped region and returns the raw value

        -**Concurrency Control**: Realm smoothly handles the
            concurrency using the MVCC model,

        -**Built-in storage engine written in C**: Reduces
            dependencies and improves query performance

        -Realm is an **object-oriented** database rather than a
            relational database. OO model **makes it 10x faster than
            SQLite**

        -Realm synchronization services run in the background to
            record and save the user interaction, and service requests
            locally. Once the device is online, it sends data back to
            the server and executes the tasks without hindering the user
            experience.

        -Realm has algorithms in place to handle the conflicts in the
            objects while syncing the data back to the server.

        -Offline queue support automatically re-dispatch user actions
            when the connection is back online.

    -Security

        -Realm compatibility, but their encryption technology has
            been used by many banks in their consumer-facing
            applications.

        -**For SOX and GLBA compliances**, Realm has been considered
            secure enough to use.

        -**For Android**, they use AES-256 level of encryption and
            decryption of all the data stored locally.

        -**for iOS applications**, their encryption is based on the
            iOS CommonCrypto library, which protects the app data and
            passwords stored in the keychain.

        -**For windows applications**, Realm uses Crypto library for
            encryption.

    -Supported Datatypes and file forms

        -Realm supports the following property types: Bool, Int,
            Int8, Int16, Int32, Int64, Double, Float, String, Date, and
            Data.

        -When you consider images or videos, you can't directly store
            images or videos to your local Realm database. You have to
            either convert the files into NSDATA to store locally or
            just store on the server-side and define a path for it.

    -**Cost**

        -Realm Database is 100% open source and free. Realm costs $1750 --  for the pro version, there's a commercial version available for free as well.

    -Work with redux offline

        -Implementing read-write network resilience

        -Support for optimistic data updates when offline and
            pessimistic UI state in opposite case

        -Enabling background synchronization

        -Migrating database schema versions

        -Enabling data caching and up-front data loading

-Firebase

    -Intro

        -irebase supports a **real-time NoSQL database** for
            react-native. It can be your best bet when it comes to
            changes like data synchronization and offline data
            modification. You can suppose React Native to be
            as **"V\[view\]" in MVC**.

        -Firebase is pretty much capable of fulfilling the
            requirements of "M\[model\] and C\[controller\] in MVC" to
            react Native based applications. Since the idea behind the
            development of React was to provide a user interface, there
            was something needed to support and made it fully functional
            at the backend. This is where firebase as a NoSQL BaaS comes
            into play.

    -Performance

        -Real-time data Sync

            -The **biggest advantage** of using firebase for
                react-native is that **real-time data**is **synced
                across** all clients at a time. This is really important
                in the case when your app suddenly goes offline due to
                unavailability of an internet connection.

            -A cross-platform app with its iOS, Android, and
                Javascript SDK, you will have an advantage of not caring
                about the constant data updates as all your clients will
                share a common real-time database instance.

        -Minimal Setup

            -Another advantage of using react native and firebase
                together is that it provides a cross-platform API that
                requires a minimal setup while you are using it with
                your app. Moreover, you will not need any application
                server to access data as firebase real-time database can
                be directly accessed from a mobile device.

        -Offline persistence with Firebase

            -have the advantage to work offline (given that the
                application goes offline after connection established at
                the first time).

            -Marking user presence as offline/ online: While
                developing a real-time application, you will have to
                mark the state of a user as connected (online) and
                disconnected (offline or busy). This can be handled by
                firebase onDisconnect primitive.

            -Timestamp when the user goes offline: Firebase real-time
                database also facilitates storing timestamp when a user
                gets disconnected every time. This timestamp can be used
                to identify exactly at what time the user goes offline.

            -offline capabilities of firebase make it as most
                suitable database while developing apps that takes
                user's presence and real-time data transfer into account

        -Data transfer

            -Firebase is good to go with scalable applications where
                you want to transfer your data to different users at a
                time without having to care for any data breakage.

            -In fact, **data serving and synchronization is extremely
                fast** so that you can easily transfer files to any
                number of users across the globe.

            -It has **free CDN and SSL layer** with cloud storage.
                This is the only area in which firebase triumphed over
                other local databases.

        -Data Querying

            -This is something which is not possible in firebase

            -firebase does not come with any sort of searching
                capabilities so you have to rely really on your own
                common sense to get it done. You can always use any
                third party service for this purpose.

        -Handling Relations

            -Firebase as a NoSQL database is least suitable for
                handling relations. Since the data is mainly stored in a
                big JSON file. There is no specific way through which
                you can declare "*one to many*" or "*many to many
                relationships*" at all.

            -For instance, in some cases, you might encounter some
                problem to change the specific data attribute such
                as *name *in a chat app for all users. For this, you
                will want to change the attribute for all users or
                everywhere you have used it.

            -So, it's not a specific way for all the users on
                application to change their name which is not a viable
                option at all.

    -Security

        -Encryption

            -It is hosted on SSL (Secure Socket Layer) which keeps
                the connection safe with the client.

            -data is **not encrypted at server side** which makes it
                prone to security threats and theft. 

            -**use other local databases** such as Realm or
                combination with any other server-side database **to
                store your sensitive data** with encryption.

        -Authentication and Authorization

            -Firebase boasts of a simple easy-to-access API which can
                be used to authenticate users with data access and
                manipulation with some robust security rules.

            -One major advantage which goes hand-in-hand with
                firebase authentication is that it boasts inbuilt
                functionality for login authentication (via email/
                password).

            -Able to integrate third-party providers with your
                firebase

            -Security rules for firebase are easy to understand and
                are properly defined in firebase official documentation.
                They are a custom set of declarative language which can
                be used for data validation and authorization.

            -Administrators can define "Read/ Write" rules using JSON
                structure for any sort of level in application data
                tree.

        -Integration and Migration in Firebase

            -comes with some integrators which is an obvious part as
                it is owned and maintained by Google. So, you don't need
                to play with your code every-time as these integrations
                are super easy to configure and use

            -Following are some of the SDK integrators that you can
                use with firebase:

                -OAuth authentication

                -File storage

                -Database backups

                -Automagical scaling

                -CLI for deploying and other duties

                -Free Tier

        -Push notifications in firebase

            -Apart from these integrations, firebase allows
                authenticating push notifications through FCM. However,
                configuring it in an easier way is unlikely everyone's
                piece of cake.

            -Luckily there is one library that helps you build it
                easily after going through some sort of configuration
                process. Just start the listener wherever you want and
                you are good to go. Also, this library helps you send
                custom local notifications as well.

            -#### Migration from firebase to other databases

            -With Firebase, it's hard (*yet not impossible*) to
                migrate data since data is stored as JSON. However, you
                can always import/ export your data from firebase in a
                JSON file and then you can use any other database that
                reads JSON data.

    -Cost

        -Firebase is not open source, and their pricing is complex.

        -Free @ 100 connections, 1gb stored

    -Supported Datatypes and fil forms

        -Some firebase supported data types are Boolean, bytes, date
            and time, integer, map, null, text string and reference.

        -No support for Array

            -you can't store arrays in firebase. In case, you declare
                an array then it will then stored by default in the form
                of an object along with integers as the key names.

        -Uploading files in firebase

            -One major challenge you might encounter while using
                Firebase as a react native database might be in
                uploading the files (like images for profile building
                concerns) as the SDK won't work in this case.

            -The reason being is that in the mobile environment you
                can only get the file path whereas the SDK require BLOB
                which can be only provided by the web browser.

            -In this case, you might have to prefer some 3rd party
                libraries to address this issue. For
                example:[ react-native-file-picker](https://github.com/akki-ng/react-native-file-picker) and[ react-native-fetch-blob](https://github.com/wkh237/react-native-fetch-blob)

        -

-SQlite

    -Performance

    -Security

    -Supported Datatypes and fil forms

    -Cost

-PouchDB

    -Intro

        -PouchDB is an open source Javascript Database, which stores
            data in a JSON format and allows you to: create, read,
            update, delete and query your objects with a simple
            JavaScript API. The API can be accessed with a single call
            on React Native platform, which is also based on Javascript.

    -Performance

        -Similar to Firebase, PouchDB data can also be synchronized
            between multiple, so users can access their data on the go.
            Although, If you're using any Native library, then OS
            specific data can't be synced between multiple clients.

        -Peer to Peer Replication in a single stroke

            -PouchDB with its replication feature allows local
                storage to be disconnected from the server side while
                both copies can be updated concurrently. Once it's
                updated, the data gets synced across multiple clients
                without any data leakage

    -Security

        -Stores the password in the hash form using PBKDF2
            cryptography, which is a standard key derivation function to
            protect encrypted keys from brute force attacks.

        -It does stores cookies from the app, but keep refreshing
            every 10 minutes, which reduces possible attacks on the
            cookie.

        -It supports SSL, so you can easily encrypt your local data
            with an AES256 level of encryption.

    -Supported Datatypes and fil forms

        -supports most of the universal data types including Boolean
            values, numeric values, string values, arrays, objects, and
            NULL.

        -Allow you to convert the files into either in a
             base64-encoded format or as a Blob and directly store in
            the local memory.

    -Cost

        -PouchDB development and updates are publicly available on
            Github and **it's free to use**.

-React-Native Async Storage

    -Intro

        -Async storage is a local storage system, which gives you the
            ability to store locally and persist the data between app
            reboots. 

        -It comes in-built with React Native, so you can use it
            without any additional deployment. 

    -Performance

        -The downsides are slow to runtime and have no indexing
            capabilities.

        -**You should not use Async Storage while dealing with a
            large amount of data**.

        -Async Storage **doesn't offer any Offline
            Capability** unless you bind it with another full-scale
            database like SQLite, or Realm.

    -Security

        -In terms of security, there is **no encryption** available
            locally, also the **data vanishes if a user deletes the
            app**.

    -Supported Datatypes and fil forms

        -All objects stored in Async Storage are considered as
            strings

            -That explains its slow runtime and no indexing
                capability.

    -Cost
