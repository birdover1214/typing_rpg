<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(FieldsTableSeeder::class);

        $this->call(ItemsTableSeeder::class);

        $this->call(QuestionsTableSeeder::class);

        $this->call(MonstersTableSeeder::class);
    }
}
