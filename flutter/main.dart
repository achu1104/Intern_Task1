import 'package:flutter/material.dart';

void main() {
  runApp(FundraisingApp());
}

class FundraisingApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fundraising Intern Portal',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.green,
        scaffoldBackgroundColor: Colors.grey[100],
      ),
      home: FundraisingHomePage(),
    );
  }
}

class FundraisingHomePage extends StatelessWidget {
  final List<Map<String, dynamic>> campaigns = [
    {
      'title': 'Save the Rainforest',
      'goal': 5000,
      'raised': 3200,
    },
    {
      'title': 'Clean Water Project',
      'goal': 3000,
      'raised': 2500,
    },
    {
      'title': 'Education for All',
      'goal': 7000,
      'raised': 6700,
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Intern Fundraising Portal'),
        actions: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Icon(Icons.account_circle),
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Welcome, Intern!",
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
            SizedBox(height: 8),
            Text("Here's a summary of your fundraising efforts.",
                style: TextStyle(fontSize: 16, color: Colors.grey[700])),
            SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: campaigns.length,
                itemBuilder: (context, index) {
                  final campaign = campaigns[index];
                  final percent =
                      campaign['raised'] / campaign['goal'];

                  return Card(
                    margin: EdgeInsets.symmetric(vertical: 8),
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(campaign['title'],
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.bold)),
                          SizedBox(height: 10),
                          LinearProgressIndicator(
                            value: percent,
                            backgroundColor: Colors.grey[300],
                            valueColor: AlwaysStoppedAnimation<Color>(
                                Colors.green),
                          ),
                          SizedBox(height: 6),
                          Text(
                            '\$${campaign['raised']} raised of \$${campaign['goal']} goal',
                            style: TextStyle(fontSize: 14),
                          )
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
